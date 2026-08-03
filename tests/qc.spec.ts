import { expect, test } from "playwright/test";

const viewports = [
  { width: 320, height: 720 },
  { width: 390, height: 844 },
  { width: 768, height: 900 },
  { width: 1024, height: 900 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
  { width: 2560, height: 1440 },
];

test("layout stays within the viewport from mobile to ultrawide", async ({ page }) => {
  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.goto("/");
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, `${viewport.width}px viewport overflow`).toBeLessThanOrEqual(1);
  }
});

test("navigation uses the collision-free breakpoint", async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 900 });
  await page.goto("/");
  await expect(page.getByRole("button", { name: "Open navigation" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeHidden();

  await page.setViewportSize({ width: 900, height: 900 });
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Open navigation" })).toBeHidden();

  const boxes = await page.evaluate(() => {
    const nav = document.querySelector<HTMLElement>('nav[aria-label="Primary navigation"]');
    const download = Array.from(document.querySelectorAll<HTMLAnchorElement>("header a")).find(
      (link) => link.textContent?.trim() === "Download",
    );
    return { nav: nav?.getBoundingClientRect(), download: download?.getBoundingClientRect() };
  });
  expect(boxes.nav?.right ?? 0).toBeLessThan(boxes.download?.left ?? 0);
});

test("mobile navigation closes with Escape and restores focus", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open navigation" });
  await toggle.click();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeHidden();
  await expect(toggle).toBeFocused();
});

test("sticky navigation leaves anchored sections visible on ultrawide screens", async ({ page }) => {
  await page.setViewportSize({ width: 2560, height: 1440 });
  await page.goto("/");
  await page.getByRole("link", { name: "Features", exact: true }).click();

  await expect.poll(async () => {
    return page.evaluate(() => {
      const header = document.querySelector("header")?.getBoundingClientRect();
      const section = document.querySelector("#features")?.getBoundingClientRect();
      return (section?.top ?? 0) - (header?.bottom ?? 0);
    });
  }).toBeGreaterThanOrEqual(0);
});

test("carousels remain operable after repeated navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const nextSolution = page.getByRole("button", { name: "Next solution" });
  for (let index = 0; index < 8; index += 1) await nextSolution.click();
  await expect(page.locator('[aria-live="polite"]').filter({ hasText: "Solution" })).toContainText(
    /Solution [1-4] of 4:/,
  );

  const previousTestimonial = page.getByRole("button", { name: "Previous testimonial" });
  for (let index = 0; index < 8; index += 1) await previousTestimonial.click();
  await expect(page.locator('[aria-live="polite"]').filter({ hasText: "Testimonial" })).toContainText(
    /Testimonial [1-3] of 3:/,
  );
});
