'use client'
import { Container, Row } from "react-bootstrap";
import SideBar from "@/Components/Books/SideBar";
import BookContainer from "@/Components/Books/BookContainer";
import { useState } from "react";
import { Chapter } from "@/Interfaces/InterFaces";


export default function UserDAshboardLayout() {
    const [Book, setBook] = useState({})
  return (
    <Container>
      <Row>
    <section className="flex  justify-start items-start gap-1">
      <SideBar setBook={setBook as (chapter:Chapter) => void}/>
      <div className="w-5/6 h-full gap-3 bg-gray-400 min-h-screen rounded p-3 flex justify-start items-start flex-col flex-wrap">
      <BookContainer Book={Book as Chapter}/>
      </div>
    </section>
      </Row>
    </Container>
  );
}
