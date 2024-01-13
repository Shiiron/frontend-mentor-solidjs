import { Title } from "@solidjs/meta";
import DataCardComponent from "~/components/data-card/data-card";
import { dataService } from "../services/service";
import { For, createResource } from "solid-js";
import ProfileCardComponent from "~/components/profil-card/profile-card";
import { ContextProvider } from "~/contexts/context";

export default function Home() {
  const [data] = createResource<any[], string>(dataService)

  return (
      <main class="dark-blue">
        <ContextProvider>
          <div class="card-wrapper">
            <ProfileCardComponent />
            <For each={data()}>
              {(data) => {
                return (<DataCardComponent card={data} />)  
              }}
            </For>
          </div>
        </ContextProvider>
      </main>
  );
}
