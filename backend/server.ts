import { opine, serveStatic } from "https://deno.land/x/opine@2.1.2/mod.ts";

const app = opine();

const pathToAssets = `${Deno.cwd()}/frontend/nft-marketplace/dist`
const pathToIndexHTML = `${pathToAssets}/index.html`

app.use(serveStatic(pathToAssets))

app.get("/", function (req, res) {
    res.sendFile(pathToIndexHTML);
});

app.listen(
    3000,
    () => console.log("server has started on http://localhost:3000 🚀"),
);