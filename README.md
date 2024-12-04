# React Router v6 Nested Route Bug

This repository demonstrates a bug encountered with nested routes in React Router v6. The issue involves a child route failing to render, even when the URL is correct and the parent route renders without problems. The bug is specifically related to the proper passing and handling of props within the nested route structure.

## Bug Description

The `Profile` component, nested under the `/dashboard` route, does not mount. The URL is correctly set to `/dashboard/profile`, but the component remains unrendered.  This was found to be due to an issue with props not correctly being passed to the child component.

## Solution

The solution involves ensuring correct prop handling within the nested route structure. The updated code, found in `bugSolution.js`, addresses this by explicitly passing and handling the necessary props within the parent and child components, effectively resolving the rendering issue.