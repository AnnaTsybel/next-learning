import { createStoreon, StoreonModule } from "storeon";
import { useStoreon } from "storeon/react";
import { StoreContext } from "storeon/react";
import { useEffect } from "react";
import Layout from "../src/components/Layout";
import Tasks from "../src/components/Pages/Tasks/Tasks";


export default function Taskss() {
  

  return (
    <Layout>
      <Tasks />
    </Layout>
  );
}
