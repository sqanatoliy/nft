import { test, expect } from '@playwright/test';

for (let i = 1; i < 2181; i++){
test(`refresh metadata ${i}`, async ({ page }) => {
  const a = 10
  await page.goto('https://opensea.io/assets/matic/0x29a57599ff4df8f26115668233f276d77ff5a371/' + i);
  const dropdown = page.locator('#main > div > div > div > div.fresnel-container.fresnel-greaterThanOrEqual-lg > div > div.item--wrapper > div.item--main > section.item--header > div.item--collection-info > div.item--collection-toolbar-wrapper > div > button:nth-child(3) > span > i');
  const refresh = page.locator('#tippy-20 > div > div > div > ul > li:nth-child(1) > button > div.sc-29427738-0.sc-630fc9ab-0.sc-99655001-0.sc-4422a702-0.sc-a8df1259-1.iihyIq.jSPhMX.kKyBpy.fYgjHJ.dNyhhk > span');
  await dropdown.waitFor({state: "visible"});
  await dropdown.click();
  await refresh.waitFor({state: 'visible'});
  await refresh.click();
  // await page.waitForSelector('');
  // await page.waitForTimeout(1000);
});

}
