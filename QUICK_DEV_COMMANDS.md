# Quick Dev Commands Reference

## 🚀 Starting Development

```bash
# Start dev server
npm run dev

# Dev server will be available at:
# http://localhost:5173/
```

---

## 🔧 When Dev Server Crashes

### Quick Fix (Try First):
```bash
# 1. Stop the server (Ctrl+C in terminal)
# 2. Clear Vite cache
rm -rf node_modules/.vite

# 3. Restart
npm run dev
```

### Full Reset (If Quick Fix Doesn't Work):
```bash
# 1. Stop the server (Ctrl+C)
# 2. Clear all caches and build artifacts
rm -rf node_modules/.vite
rm -rf dist

# 3. Reinstall dependencies (if needed)
npm install

# 4. Restart
npm run dev
```

### Nuclear Option (Last Resort):
```bash
# Complete clean slate
rm -rf node_modules
rm -rf node_modules/.vite
rm -rf dist
npm install
npm run dev
```

---

## 🧪 Testing & Validation

```bash
# Run linter
npm run lint

# Build for production (tests if code compiles)
npm run build

# Preview production build
npm run preview
```

---

## 📊 Monitoring Dev Server Health

### Good Signs ✅:
```
VITE v6.4.1  ready in XXX ms
➜  Local:   http://localhost:5173/
➜  Network: http://192.168.X.X:5173/

[vite] (client) hmr update /src/App.tsx
```

### Bad Signs ❌:
```
Error: Failed to resolve import
Module not found
[vite] Internal server error
```

---

## 🐛 Debugging

### Check Browser Console:
1. Open browser DevTools (F12 or Cmd+Option+I)
2. Go to Console tab
3. Look for red error messages

### Check Network Tab:
1. Open DevTools → Network tab
2. Refresh page
3. Look for failed requests (red status codes)

### Check Terminal Output:
- Look for error messages in the terminal running `npm run dev`
- HMR updates should show file changes

---

## 📁 Important Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite configuration (HMR, server settings) |
| `src/App.tsx` | Main app component |
| `src/main.tsx` | App entry point |
| `DEV_SERVER_STABILITY_GUIDE.md` | Detailed troubleshooting |
| `DEV_SERVER_FIX_SUMMARY.md` | Recent fixes applied |

---

## 🎯 Common Issues & Solutions

### Issue: "This site can't be reached"
**Solution:**
```bash
# Check if dev server is running
# Look for "VITE v6.4.1 ready" message in terminal
# If not running, start it:
npm run dev
```

### Issue: Blank white screen
**Solution:**
1. Check browser console for errors
2. Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
3. Restart dev server

### Issue: Changes not showing up
**Solution:**
1. Check terminal for HMR update messages
2. Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
3. Restart dev server if HMR is broken

### Issue: "Module not found" errors
**Solution:**
```bash
# Reinstall dependencies
npm install

# Clear cache and restart
rm -rf node_modules/.vite
npm run dev
```

---

## 🔄 Git Workflow

```bash
# Before making changes
git status
git pull

# After making changes
git add .
git commit -m "Description of changes"
git push
```

---

## 📞 Getting Help

1. **Check documentation:**
   - `DEV_SERVER_STABILITY_GUIDE.md` - Detailed troubleshooting
   - `DEVELOPMENT.md` - Project setup and workflow
   - `README.md` - Project overview

2. **Check browser console** for runtime errors

3. **Check terminal output** for build errors

4. **Try the fixes above** in order (Quick Fix → Full Reset → Nuclear Option)

---

## ⚡ Performance Tips

- **Use useMemo** for expensive computations
- **Use React.memo** for components that don't need frequent re-renders
- **Avoid inline object/array creation** in JSX props
- **Keep components small** and focused

---

## 🎨 Code Quality

```bash
# Check for linting errors
npm run lint

# Build to check for TypeScript errors
npm run build
```

---

## 🌐 Accessing from Other Devices

The dev server is accessible on your local network:

```
Local:   http://localhost:5173/
Network: http://192.168.X.X:5173/
```

Use the Network URL to test on mobile devices or other computers on the same network.

