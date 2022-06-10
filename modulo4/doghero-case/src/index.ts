import express from "express";

import { AddressInfo } from "net";
import { dogheroRouter } from "./router/DogHeroRouter";
import { endRouter } from "./router/FinishwalkRouter";
import { petRouter } from "./router/PetRouter";
import { startRouter } from "./router/StartwalkRouter";

const app = express();

app.use(express.json());

app.use("/pets", petRouter);
app.use("/doghero", dogheroRouter);
app.use("/start", startRouter);
app.use("/end", endRouter);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;