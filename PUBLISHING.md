# Publishing to NPM

This guide explains how to publish nano-faker packages to npm using GitHub Actions.

## Setup

### 1. Create an NPM Access Token

1. Log in to [npmjs.com](https://www.npmjs.com/)
2. Go to **Account Settings** → **Access Tokens**
3. Click **Generate New Token** → **Classic Token**
4. Select **Automation** type (for CI/CD)
5. Copy the generated token

### 2. Add NPM Token to GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `NPM_TOKEN`
5. Value: Paste your npm token
6. Click **Add secret**

## Publishing Process

### Automated Publishing (Recommended)

The GitHub Actions workflow automatically publishes packages when you push a version tag:

```bash
# 1. Update version in all package.json files
pnpm -r exec npm version patch  # or minor, major

# 2. Commit the version changes
git add .
git commit -m "chore: bump version to 0.1.1"

# 3. Create and push a version tag
git tag v0.1.1
git push origin main --tags
```

The workflow will:
- ✅ Run all tests
- ✅ Build all packages
- ✅ Publish to npm with public access
- ✅ Add npm provenance for security

### Manual Publishing

If you prefer to publish manually:

```bash
# 1. Ensure you're logged in to npm
npm login

# 2. Build all packages
pnpm build

# 3. Run tests
pnpm test

# 4. Publish all packages
pnpm -r publish --access public
```

## Version Management

### Updating Package Versions

```bash
# Patch version (0.1.0 → 0.1.1)
pnpm -r exec npm version patch

# Minor version (0.1.0 → 0.2.0)
pnpm -r exec npm version minor

# Major version (0.1.0 → 1.0.0)
pnpm -r exec npm version major
```

### Updating Specific Package

```bash
cd packages/core
npm version patch
```

## Workflows

### CI Workflow (`ci.yml`)
- Runs on: Push to main/develop, Pull Requests
- Tests on: Node.js 18 and 20
- Steps: Install → Lint → Test → Build

### Publish Workflow (`publish.yml`)
- Runs on: Version tags (v*)
- Steps: Install → Test → Build → Publish to npm

## Troubleshooting

### Authentication Failed
- Verify `NPM_TOKEN` is set in GitHub Secrets
- Ensure token has **Automation** permissions
- Check token hasn't expired

### Package Already Published
- npm doesn't allow republishing the same version
- Bump version number before publishing
- Use `npm unpublish` only within 72 hours if needed

### Build Failures
- Ensure all tests pass locally first
- Check TypeScript compilation errors
- Verify all dependencies are installed

## Best Practices

1. **Always test before publishing**
   ```bash
   pnpm test && pnpm build
   ```

2. **Use semantic versioning**
   - MAJOR: Breaking changes
   - MINOR: New features (backward compatible)
   - PATCH: Bug fixes

3. **Update CHANGELOG.md** before each release

4. **Tag releases** for easy version tracking
   ```bash
   git tag -a v0.1.0 -m "Release v0.1.0"
   ```

5. **Use npm provenance** (automatically enabled in workflow)
   - Provides transparency about package origin
   - Shows build and publish information

## Package Scope

All packages are published under the `@nano-faker` scope:
- `@nano-faker/core`
- `@nano-faker/number`
- `@nano-faker/person`
- `@nano-faker/internet`
- `@nano-faker/patterns`

## First-Time Publishing

For the initial publish, you may need to:

1. Claim the `@nano-faker` scope on npm
2. Set up organization permissions
3. Verify email address

After the first successful publish, subsequent releases will be automatic via GitHub Actions.
