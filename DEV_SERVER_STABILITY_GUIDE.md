# Dev Server Stability Guide

## 🔍 Common Causes of Dev Server Crashes

### 1. **React StrictMode Double Rendering**
**Issue:** React 19 StrictMode causes components to render twice in development, which can expose state management bugs.

**Current Status:** ✅ Using StrictMode (src/main.tsx)
- This is GOOD for catching bugs but can cause issues with side effects

**Potential Problems:**
- `getTotalQuestionCount()` is called during state initialization
- If this function has side effects or errors, it will crash the app

### 2. **Circular Dependencies**
**Risk Areas:**
- `src/utils/categoryHelpers.ts` imports from `src/data/questions/index.ts`
- Multiple components import from the same data files
- Category mapping could create circular references

### 3. **Memory Leaks from State Updates**
**Current Issues:**
- `Object.fromEntries()` in App.tsx (line 114) runs on EVERY render
- No memoization for expensive computations
- Multiple state updates in rapid succession

### 4. **HMR (Hot Module Replacement) Issues**
**Common Triggers:**
- Editing files while dev server is processing
- Syntax errors that break the module graph
- CSS changes that trigger full page reloads

---

## ✅ Fixes Applied

### 1. **Improved Vite Configuration**
Added to `vite.config.ts`:
```typescript
server: {
  port: 5173,
  strictPort: false,  // Find another port if 5173 is busy
  host: true,         // Listen on all addresses
  hmr: {
    overlay: true,    // Show errors in browser overlay
  },
}
```

### 2. **Better Error Handling**
- Added sourcemaps for debugging
- Configured rollup to suppress non-critical warnings

---

## 🚨 Known Issues to Fix

### Priority 1: Performance Issues

**Problem:** Expensive computation on every render
```typescript
// App.tsx line 114-118
questionAttempts={Object.fromEntries(
  Object.entries(answeredQuestions)
    .filter(([key]) => key.startsWith(currentQuestion?.category || ''))
    .map(([key, data]) => [key.split('-')[1], data.attempts])
)}
```

**Fix:** Use `useMemo` to cache this computation
```typescript
const questionAttempts = useMemo(() => 
  Object.fromEntries(
    Object.entries(answeredQuestions)
      .filter(([key]) => key.startsWith(currentQuestion?.category || ''))
      .map(([key, data]) => [key.split('-')[1], data.attempts])
  ),
  [answeredQuestions, currentQuestion?.category]
);
```

### Priority 2: Error Boundaries

**Problem:** No error boundary means any runtime error crashes the entire app

**Fix:** Add React Error Boundary component

### Priority 3: Potential Division by Zero

**Problem:** In `getAvailableHints()` (QuestionWindow.tsx line 114)
```typescript
setHintIndex((prev) => (prev + 1) % getAvailableHints().length);
```
If `getAvailableHints().length` is 0, this causes modulo by zero.

---

## 🛠️ Debugging Steps

### When Dev Server Crashes:

1. **Check Terminal Output**
   ```bash
   # Look for error messages in the terminal running `npm run dev`
   ```

2. **Check Browser Console**
   - Open DevTools (F12)
   - Look for red errors in Console tab
   - Check Network tab for failed requests

3. **Check for Syntax Errors**
   ```bash
   npm run lint
   ```

4. **Clear Vite Cache**
   ```bash
   rm -rf node_modules/.vite
   npm run dev
   ```

5. **Restart with Clean State**
   ```bash
   # Kill the dev server (Ctrl+C)
   rm -rf node_modules/.vite
   rm -rf dist
   npm run dev
   ```

---

## 🔧 Recommended Fixes

### 1. Add Error Boundary (High Priority)
Create `src/components/ErrorBoundary.tsx`

### 2. Add Performance Optimizations (Medium Priority)
- Memoize expensive computations in App.tsx
- Add React.memo to components that don't need frequent re-renders

### 3. Add Runtime Validation (Medium Priority)
- Validate that questions data is loaded correctly
- Add null checks before accessing nested properties

### 4. Improve State Management (Low Priority)
- Consider using useReducer for complex score logic
- Extract state logic into custom hooks

---

## 📊 Monitoring

### Check Dev Server Health:
```bash
# In terminal, the dev server should show:
VITE v6.4.1  ready in XXX ms
➜  Local:   http://localhost:5173/
```

### Signs of Instability:
- ❌ "Failed to resolve import" errors
- ❌ "Module not found" errors
- ❌ Blank white screen in browser
- ❌ "Cannot read property of undefined" errors
- ❌ Infinite re-render loops

### Healthy Signs:
- ✅ HMR updates show in terminal: "page reload src/App.tsx"
- ✅ Browser shows changes without full refresh
- ✅ No console errors in browser DevTools

---

## 🎯 Next Steps

1. **Immediate:** Monitor the dev server for the next 10 minutes
2. **Short-term:** Add error boundary and performance optimizations
3. **Long-term:** Consider adding automated tests to catch issues early

