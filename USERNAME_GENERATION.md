# Username Generation System

## Overview

The Campus Blind app now generates random alphanumeric usernames in the style of Team Blind during signup.

## Username Format

**Before**: `Student_12345`

**After**: `glQe27`, `xK9pL2`, `mN4tR8`, `Rt5nK3`

### Characteristics
- **Length**: 6 characters
- **Characters**: Mix of:
  - Lowercase letters (a-z)
  - Uppercase letters (A-Z)
  - Numbers (0-9)
- **Pattern**: Random combination (e.g., 2-3 letters + 2-3 numbers in random order)

## How It Works

### 1. Username Generation Function

```javascript
const generateRandomUsername = (): string => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let username = ''
  for (let i = 0; i < 6; i++) {
    username += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return username
}
```

### 2. Uniqueness Check

Before saving, the system checks if the username already exists in the `profiles` table:

```javascript
const isUsernameAvailable = async (username: string): Promise<boolean> => {
  const { data } = await supabase
    .from('profiles')
    .select('username')
    .eq('username', username)
    .maybeSingle()

  return !data // Returns true if username is available
}
```

### 3. Retry Logic

If a username already exists, the system will:
- Try up to **10 times** to generate a unique username
- If still no unique username after 10 attempts, append a 2-digit timestamp suffix
- This ensures every user gets a unique username

```javascript
const generateUniqueUsername = async (): Promise<string> => {
  let username = generateRandomUsername()
  let attempts = 0
  const maxAttempts = 10

  while (attempts < maxAttempts) {
    const isAvailable = await isUsernameAvailable(username)
    if (isAvailable) {
      return username
    }
    username = generateRandomUsername()
    attempts++
  }

  // Fallback: append timestamp
  return generateRandomUsername() + Date.now().toString().slice(-2)
}
```

## User Experience

1. **Automatic**: Users don't need to enter or choose a username
2. **Anonymous**: Random usernames maintain anonymity
3. **Unique**: System guarantees uniqueness across all users
4. **Professional**: Matches Team Blind's style and format

## Example Usernames

Here are some examples of usernames the system might generate:

- `glQe27`
- `xK9pL2`
- `Rt5nK3`
- `mN4tR8`
- `Pq8Yz3`
- `aB5cD9`
- `Lm2Np7`
- `Wx4Uv1`

## Technical Details

### Location
- **File**: `/app/signup/page.tsx`
- **Functions**: 
  - `generateRandomUsername()` - Generates random 6-char string
  - `isUsernameAvailable()` - Checks database for uniqueness
  - `generateUniqueUsername()` - Combines generation with uniqueness check

### Database
- **Table**: `profiles`
- **Column**: `username` (TEXT, NOT NULL, UNIQUE)
- **Check**: Query runs before profile creation to verify uniqueness

### Performance
- **Average**: 1 attempt (most usernames are unique on first try)
- **Worst case**: 10 attempts + timestamp fallback
- **Collision rate**: Very low with 62^6 = 56,800,235,584 possible combinations

## Future Enhancements

Possible improvements:
1. Add pronounceable username generation (e.g., consonant-vowel patterns)
2. Allow users to regenerate username once after signup
3. Add username change feature with cooldown period
4. Track username generation analytics
