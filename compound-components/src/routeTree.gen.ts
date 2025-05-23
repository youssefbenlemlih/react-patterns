/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as HelloImport } from './routes/hello'
import { Route as IndexImport } from './routes/index'
import { Route as ContactIdIndexImport } from './routes/$contactId.index'
import { Route as ContactIdEditImport } from './routes/$contactId.edit'

// Create/Update Routes

const HelloRoute = HelloImport.update({
  id: '/hello',
  path: '/hello',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ContactIdIndexRoute = ContactIdIndexImport.update({
  id: '/$contactId/',
  path: '/$contactId/',
  getParentRoute: () => rootRoute,
} as any)

const ContactIdEditRoute = ContactIdEditImport.update({
  id: '/$contactId/edit',
  path: '/$contactId/edit',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/hello': {
      id: '/hello'
      path: '/hello'
      fullPath: '/hello'
      preLoaderRoute: typeof HelloImport
      parentRoute: typeof rootRoute
    }
    '/$contactId/edit': {
      id: '/$contactId/edit'
      path: '/$contactId/edit'
      fullPath: '/$contactId/edit'
      preLoaderRoute: typeof ContactIdEditImport
      parentRoute: typeof rootRoute
    }
    '/$contactId/': {
      id: '/$contactId/'
      path: '/$contactId'
      fullPath: '/$contactId'
      preLoaderRoute: typeof ContactIdIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/hello': typeof HelloRoute
  '/$contactId/edit': typeof ContactIdEditRoute
  '/$contactId': typeof ContactIdIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/hello': typeof HelloRoute
  '/$contactId/edit': typeof ContactIdEditRoute
  '/$contactId': typeof ContactIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/hello': typeof HelloRoute
  '/$contactId/edit': typeof ContactIdEditRoute
  '/$contactId/': typeof ContactIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/hello' | '/$contactId/edit' | '/$contactId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/hello' | '/$contactId/edit' | '/$contactId'
  id: '__root__' | '/' | '/hello' | '/$contactId/edit' | '/$contactId/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  HelloRoute: typeof HelloRoute
  ContactIdEditRoute: typeof ContactIdEditRoute
  ContactIdIndexRoute: typeof ContactIdIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  HelloRoute: HelloRoute,
  ContactIdEditRoute: ContactIdEditRoute,
  ContactIdIndexRoute: ContactIdIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/hello",
        "/$contactId/edit",
        "/$contactId/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/hello": {
      "filePath": "hello.tsx"
    },
    "/$contactId/edit": {
      "filePath": "$contactId.edit.tsx"
    },
    "/$contactId/": {
      "filePath": "$contactId.index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
