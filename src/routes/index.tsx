import { createResource, For, Show } from "solid-js";
import DataCardComponent from "~/components/data-card/data-card";
import ProfileCardComponent from "~/components/profil-card/profile-card";
import { ContextProvider } from "~/contexts/context";
import { dataService } from "~/services/service";

export default function Home() {
  const [data] = createResource(dataService)

  return (
    <main class="dark-blue">
      <ContextProvider>
        <div class="card-wrapper">
          <ProfileCardComponent />
          <Show when={data()} fallback="loading...">
            <For each={data()}>
              {(data) =>
                <DataCardComponent card={data} />
              }
            </For>
          </Show>
        </div>
      </ContextProvider>
    </main>

);
}
