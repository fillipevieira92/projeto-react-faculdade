import React from 'react';

interface IState {
  message: string
}

class HomePage extends React.Component<React.PropsWithChildren, IState> {

  constructor(props: React.PropsWithChildren){
    super(props)  
    this.state = {
      message: ''
    }
  }

  componentDidMount(): void {
      this.setState({ message: 'Hello World!' })
  }
  
  render(): React.ReactNode {
    return <h1>{this.state.message}</h1>
  }
}

export default HomePage;
