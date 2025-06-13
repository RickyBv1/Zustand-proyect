import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useQuestionsStore } from "./store/questions";
import SintaxHighlither from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { type Question as QuestionType } from "./types";

const Question = ({ info }: { info: QuestionType }) => {
  return (
    <Card variant="outlined" sx={{ bgcolor: "#222", padding: 2, marginTop: 2 }}>
      <Typography variant="h5">{info.question}</Typography>

      <SintaxHighlither
        language="javascript"
        style={atomOneDarkReasonable}
        showLineNumbers
        wrapLongLines
      >
        {info.code}
      </SintaxHighlither>

      <List sx={{ bgcolor: "#111" }} disablePadding>
        {info.answers.map((answer, index) => (
          <ListItem key={index} disablePadding divider>
            <ListItemButton>
              <ListItemText primary={answer} sx={{ textAlign: "center" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export const Game = () => {
  const question = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);

  const questionInfo = question[currentQuestion];

  return (
    <>
      <Question info={questionInfo} />
    </>
  );
};
