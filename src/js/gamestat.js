/* eslint-disable linebreak-style */
export default function Gamestat(obj) {
  const { health } = obj;
  if (health > 50) return 'healthy';
  if (health > 15 && health <= 50) return 'wounded';
  if (health <= 15) return 'critical';
}
