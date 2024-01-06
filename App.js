
/*
/
/<div class="parent">
/   <div class="child">
/      <div class="infant">
/         <h1>This is the first parent</h1>
          <h2>This is the second parent</h2>
        </div>
        <div class="infant-end">
/         <h1>This is the first parent</h1>
          <h2>This is the second parent</h2>
        </div>
    </div>
 </div>
*/

const parent = React.createElement("div",
    { id: "parent" },
    React.createElement("div",
        { id: "child" },
        [

            React.createElement("div",
                { id: "infant" },
                [
                    React.createElement("h1",
                        {},
                        "This is the first parent"
                    ),
                    React.createElement("h2",
                        {},
                        "This is the second parent"
                    )
                ]
            ),

            React.createElement("div",
                { id: "infant-end" },
                [
                    React.createElement("h1",
                        {},
                        "This is the first parent"
                    ),
                    React.createElement("h2",
                        {},
                        "This is the second parent"
                    )
                ]
            )
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);