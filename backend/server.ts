import { opine } from "https://deno.land/x/opine@2.1.2/mod.ts";

const app = opine();

const pathToIndexHTML = `${Deno.cwd()}/frontend/index.html`

app.get("/", function (req, res) {
    res.sendFile(pathToIndexHTML);
});

app.listen(
    3000,
    () => console.log("server has started on http://localhost:3000 🚀"),
);