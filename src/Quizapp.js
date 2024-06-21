import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function Quizapp() {
  const navigate = useNavigate("");

  let questions = [
    {
      id: 1,
      question:
        "Which JavaScript method is used to write on the browser's console?",
      option: [
        "console.write()",
        "console.output()",
        "console.log()",
        "console.writeHTML()",
      ],
      correctans: "console.log()",
    },
    {
      id: 2,
      question:
        "Which JavaScript method is used to add an element to the end of an array?",
      option: ["append()", "push()", "addToEnd()", "insertAtEnd()"],
      correctans: "push()",
    },
    {
      id: 3,
      question: "What does the NaN value represent in JavaScript?",
      option: [
        "Not a Number",
        "Negative Number",
        "Null Argument",
        "No Assignment",
      ],
      correctans: "Not a Number",
    },
    {
      id: 4,
      question:
        "Which operator is used to compare both type and value in JavaScript?",
      option: ["==", "===", "=", "!="],
      correctans: "===",
    },
    {
      id: 5,
      question: "How do you declare a constant variable in JavaScript?",
      option: ["var", "let", "const", "final"],
      correctans: "const",
    },
    {
      id: 6,
      question: "What keyword is used to declare a function in JavaScript?",
      option: ["func", "def", "function", "fn"],
      correctans: "function",
    },
    {
      id: 7,
      question: 'What will the output of console.log(5 + "5");',
      option: ["10", "55", '"55"', "Error"],
      correctans: '"55"',
    },
    {
      id: 8,
      question: "What is the primary purpose of JavaScript?",
      option: [
        "To create and style web pages",
        "To manage databases",
        "To perform server-side operations",
        "To add interactivity to web pages",
      ],
      correctans: "To add interactivity to web pages",
    },
    {
      id: 9,
      question: "Which keyword is used to declare a variable in JavaScript?",
      option: ["var", "int", "string", "variable"],
      correctans: "var",
    },
    {
      id: 10,
      question: "Which of the following is a JavaScript data type?",
      option: ["Decimal", "Complex", "Undefined", "All of the above"],
      correctans: "Undefined",
    },
  ];

  const [count, setCount] = useState(0);
  const [ans, setAns] = useState({});

  const onChangeClick = (e) => {
    const { name, value } = e.target;
    setAns({ ...ans, [name]: value });
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((que) => {
      if (que.correctans === ans[que.id]) {
        score++;
      }
    });
    setCount(score);
    localStorage.setItem("result", score);
    navigate("/Result");
  };

  return (
    <div>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Quiz
        </Typography>
        {questions.map((que) => (
          <div key={que.id}>
            <Typography variant="body1">
            <h2> ({que.id}) {que.question}</h2>
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label={`question-${que.id}`}
                name={`question-${que.id}`}
              >
                {que.option.map((op, index) => (
                  <FormControlLabel
                    key={index}
                    name={que.id}
                    value={op}
                    control={<Radio />}
                    label={op}
                    onChange={onChangeClick}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        ))}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ marginTop: "20px"}}
        >
          Submit
        </Button>
      </Paper>
    </div>
  );
}
