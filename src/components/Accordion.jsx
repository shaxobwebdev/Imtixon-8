import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionUsage() {
  return (
    <div className="bg-green-800">
      <div className="container mx-auto h-[70vh]">
        <div className="flex justify-between gap-24">
          <h1 className="pt-24 text-4xl text-emerald-400">
            Часто задаваемые вопросы
          </h1>
          <div className=" w-[800px] h-600px] mt-24">
            <Accordion sx={{ backgroundColor: "#00695c" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                О компании
              </AccordionSummary>
              <AccordionDetails>
                Но синтетическое тестирование, в своём классическом
                представлении, <br /> допускает внедрение поэтапного и
                последовательного развития общества. <br /> В рамках
                спецификации современных <br /> стандартов, сторонники
                тоталитаризма в науке будут функционально разнесены.
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "#088269" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Преимущества сотрудников
              </AccordionSummary>
              <AccordionDetails>
                Но синтетическое тестирование, в своём классическом
                представлении, <br /> допускает внедрение поэтапного и
                последовательного развития общества. <br /> В рамках
                спецификации современных <br /> стандартов, сторонники
                тоталитаризма в науке будут функционально разнесены.
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "#088269" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Достижения компании
              </AccordionSummary>
              <AccordionDetails>
                Но синтетическое тестирование, в своём классическом
                представлении, <br /> допускает внедрение поэтапного и
                последовательного развития общества. <br /> В рамках
                спецификации современных <br /> стандартов, сторонники
                тоталитаризма в науке будут функционально разнесены.
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "#088269" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Карьерный рост
              </AccordionSummary>
              <AccordionDetails>
                Но синтетическое тестирование, в своём классическом
                представлении, <br /> допускает внедрение поэтапного и
                последовательного развития общества. <br /> В рамках
                спецификации современных <br /> стандартов, сторонники
                тоталитаризма в науке будут функционально разнесены.
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "#088269" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Преимущества сотрудников
              </AccordionSummary>
              <AccordionDetails>
                Но синтетическое тестирование, в своём классическом
                представлении, <br /> допускает внедрение поэтапного и
                последовательного развития общества. <br /> В рамках
                спецификации современных <br /> стандартов, сторонники
                тоталитаризма в науке будут функционально разнесены.
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "#088269" }} defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                Accordion Actions
              </AccordionSummary>
              <AccordionDetails>
                Но синтетическое тестирование, в своём классическом
                представлении, <br /> допускает внедрение поэтапного и
                последовательного развития общества. <br /> В рамках
                спецификации современных <br /> стандартов, сторонники
                тоталитаризма в науке будут функционально разнесены.
              </AccordionDetails>
              <AccordionActions></AccordionActions>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
