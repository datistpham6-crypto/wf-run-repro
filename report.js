// Reports only whether the secret is reachable. Prints length + first/last char.
// Never transmits anything anywhere.
const s = process.env.TEST_SECRET || '';
if (s) {
  console.log(`[payload] SECRET REACHABLE from foreign code: len=${s.length} first=${s[0]} last=${s[s.length-1]}`);
} else {
  console.log('[payload] secret NOT reachable');
}
