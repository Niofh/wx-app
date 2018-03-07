
/**
 * 改造星星值变成数组
 * @param average 星星数值
 * @returns {Array}
 */
export function renderStars (average) {
  const stars = [];
  let len = Math.floor(average / 2);
  for (let i = 0; i < 5; i++) {
    if (i < len) {
      stars.push(true)
    } else {
      stars.push(false)
    }
  }
  return stars;
}
