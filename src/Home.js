import React from 'react'
import { Button, Center, Paper, Stack, Text } from '@mantine/core';
export default function Home() {
  return (
    <div>
        <Center>
    <Paper shadow="xs" p="xl">
      <Text>This my text</Text>
      <div className='w-96 flex flex-row'>
      <Button variant="filled">OK</Button>
      <Button className='grow' variant="filled">OK</Button>
      <Button variant="filled">OK</Button>
      </div>
    </Paper>
    </Center>
    </div>
  )
}
