import "./App.css";
import React from "react";
import { Summary, Header, Grid, Markdown } from "./components";
import {
  firstNameContext,
  FirstNameProvider,
  lastNameContext,
  LastNameProvider,
  radioInputContext,
  RadioInputProvider,
} from "./contexts";

function App() {
  return (
    <FirstNameProvider>
      <LastNameProvider>
        <RadioInputProvider>
          <firstNameContext.Consumer>
            {(firstNameCtxVal) => {
              return (
                <lastNameContext.Consumer>
                  {(lastNameCtxVal) => (
                    <radioInputContext.Consumer>
                      {(radioInputCtxVal) => {
                        return (
                          <div className="container w-9/12 px-4 min-h-screen min-w-full flex flex-col bg-zinc-900 text-slate-50 text-lg p-2">
                            <Header name="Naive Context" />
                            <Summary
                              firstname={firstNameCtxVal}
                              lastname={lastNameCtxVal}
                              radioinput={radioInputCtxVal}
                            />
                            <Grid
                              firstname={firstNameCtxVal}
                              lastname={lastNameCtxVal}
                              radioinput={radioInputCtxVal}
                            />
                            <Markdown />
                          </div>
                        );
                      }}
                    </radioInputContext.Consumer>
                  )}
                </lastNameContext.Consumer>
              );
            }}
          </firstNameContext.Consumer>
        </RadioInputProvider>
      </LastNameProvider>
    </FirstNameProvider>
  );
}

export default App;
