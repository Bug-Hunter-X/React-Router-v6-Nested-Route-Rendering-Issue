In React Router Dom v6,  I encountered an issue where nested routes weren't rendering correctly.  My parent route was `/dashboard` and a child route was `/dashboard/profile`.  The parent route rendered fine, but the child route's component wouldn't mount.  I checked the URL, and it was correct.  My route definitions looked like this:

```javascript
<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="profile" element={<Profile />} />
  </Route>
</Routes>
```

The problem was that the `Profile` component wasn't receiving the expected props, and thus the child component was not being properly mounted.  This was particularly confusing as it only happened when navigating to this specific nested route.