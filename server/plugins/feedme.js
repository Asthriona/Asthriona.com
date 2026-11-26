const baseUrl = "https://asthriona.com";
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("feedme:handle:content:item", ({ item }) => {
    const current = item.get();
    if (!current || typeof current.link !== "string" || !current.link.startsWith("/")) return;

    item.set({ ...current, link: `${baseUrl}${current.link}` });
  });
});
