// import { useEffect, useState } from "react";
// import type { Schema } from "../amplify/data/resource";
// import { generateClient } from "aws-amplify/data";
//
// const client = generateClient<Schema>();
import { Button } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

function App() {

  return (
    <div>
      <Button>test button</Button>
    </div>
  );
}

export default App;
