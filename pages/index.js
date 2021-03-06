import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>#JSQuiz</h1>
          </Widget.Header>

          <Widget.Content>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <Input
                name="userName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
              <Button
                type="submit"
                disabled={name.length === 0}
              >
                {`Play ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quiz da Galera</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Loren ipsum  et sit em...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/lucasvma" />
    </QuizBackground>
  );
}
