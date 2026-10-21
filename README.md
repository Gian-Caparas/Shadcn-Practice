# Han-ay

## Supabase authentication

The login and signup forms use Supabase email/password authentication.

1. Create a project at [supabase.com](https://supabase.com).
2. Open **Project Settings > API** and copy the **Project URL** and the
   **Publishable key** (or legacy `anon` key).
3. Create a local `.env` file from `.env.example`:

   ```env
   VITE_SUPABASE_URL=https://your-project-ref.supabase.co
   VITE_SUPABASE_ANON_KEY=your-publishable-or-anon-key
   ```

4. In Supabase, open **Authentication > Providers > Email** and enable email
   signups. If **Confirm email** is enabled, new users must click the email
   confirmation link before logging in.
5. Add `http://localhost:5173` under **Authentication > URL Configuration >
   Site URL** while developing.
6. Start the app:

   ```bash
   npm install
   npm run dev
   ```

The browser only receives the Supabase publishable/anon key. Never put a
Supabase service-role key in `.env` or client-side code. The dashboard is
protected by the current Supabase session, and the sidebar's **Log out** item
calls `supabase.auth.signOut()`.

For production, add the deployed site URL to Supabase's URL Configuration and
set the same `VITE_` variables in the hosting provider's build environment.
