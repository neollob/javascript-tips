# ⚡ Angular CLI Command Cheat Sheet

---

## 🟢 Create & Initialize

```bash
npm install -g @angular/cli            # Install Angular CLI globally
ng new my-app                          # Create new Angular project
ng new my-app --standalone             # Create standalone app
ng new my-app --routing --style=scss   # With routing + SCSS
ng add <package>                       # Add Angular library (e.g. Angular Material)
````

---

## 🟢 Serve & Build

```bash
ng serve                      # Start dev server
ng serve --port 4500          # Start dev server on custom port
ng serve -o                   # Start and open in browser
ng build                      # Build app for production
ng build --configuration=production  # Explicit prod build
```

---

## 🟢 Generate (Scaffold)

```bash
ng generate component my-comp               # Generate component
ng g c my-comp                              # Shorthand
ng g c feature/hero --standalone            # Standalone component in folder

ng g s my-service                           # Generate service
ng g m my-module                            # Generate module
ng g p my-pipe                              # Generate pipe
ng g d my-directive                         # Generate directive
ng g i my-interface                         # Generate interface
ng g e my-enum                              # Generate enum
ng g cl my-class                            # Generate class
```

---

## 🟢 Guards / Interceptors / Resolvers

```bash
ng g guard auth/auth              # Generate guard
ng g interceptor core/http-auth   # Generate interceptor
ng g resolver users/user-resolver # Generate resolver
```

---

## 🟢 Routing

```bash
ng g m app-routing --flat --module=app   # Generate routing module
```

---

## 🟢 Testing

```bash
ng test   # Run unit tests (Karma/Jasmine)
ng e2e    # Run end-to-end tests (Cypress/Protractor)
```

---

## 🟢 Linting & Formatting

```bash
ng lint   # Run linter
```

---

## 🟢 Utility

```bash
ng update                               # Update Angular & dependencies
ng update @angular/core @angular/cli    # Update Angular to latest version
ng version                              # Check Angular CLI & project version
ng config <key> <value>                 # Update Angular config
ng analytics off                        # Disable usage data sharing
```

---

## 🟢 Useful Flags

* `--dry-run` → Preview changes without generating
* `--skip-tests` → Skip test files while generating
* `--flat` → Create files without folder
* `--inline-style` → Use inline styles in component
* `--inline-template` → Use inline template in component
* `--standalone` → Create component/service/etc. as standalone

---

## 🟢 Example Workflow

```bash
ng new shop-app --standalone --routing --style=scss
cd shop-app
ng serve -o

ng g c products/product-list --standalone
ng g s services/product
ng g g auth/auth-guard
ng g interceptor core/http-auth
ng g resolver users/user-resolver
```
