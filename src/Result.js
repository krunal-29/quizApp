import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { jsPDF } from 'jspdf';

export default function Result() {
  const handleDownload = () => {
    const score = localStorage.getItem('result');
    const name = localStorage.getItem('Name');
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.setTextColor('#1976D2'); // Material-UI primary color

    doc.text('Quiz Result', 80, 20);

    doc.setFontSize(14);
    doc.setTextColor('#333');

    doc.text(`Name: ${name}`, 20, 40);
    doc.text(`Your Score: ${score}`, 20, 50);

    doc.setLineWidth(0.5);
    doc.line(20, 55, 190, 55); // Horizontal line

    doc.setFontSize(10);
    doc.setTextColor('#777');

    doc.text('Thank you for participating in the quiz!', 20, 75, {
      maxWidth: 170,
    });

    doc.setFontSize(12);
    doc.setTextColor('#1976D2');

    doc.text('Downloaded on: ' + new Date().toLocaleString(), 20, 100);

    doc.save(`${name}_QuizResult.pdf`);
  };

  

  const name = localStorage.getItem('Name');
  const score = localStorage.getItem('result');

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '89vh' }}>
      <Card sx={{ minWidth: 275, maxWidth: 400 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Quiz Result
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Your Name: <b>{name}</b>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Your Score: <b>{score}/10</b>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Thank you for participating in the quiz!
          </Typography>
        </CardContent>
        <Button variant="contained" onClick={() => handleDownload()} style={{ margin: '20px' }}>
          Download Report
        </Button>
      </Card>
    </div>
  );
}











