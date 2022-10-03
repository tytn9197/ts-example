import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError = (error: Error) => {
    return {hasError: true};
  };

  componentDidCatch = (error: Error, errorInfo: React.ErrorInfo) => {
    console.log('TYTN componentDidCatch: ', error, errorInfo.componentStack);
  };

  render = () => {
    return (
      <View>
        {this.state.hasError ? (
          <Text style={{color: 'red'}}>ERRORRRRRRRRR SHOWWINGGGGG</Text>
        ) : (
          this.props.children
        )}
      </View>
    );
  };
}

export default ErrorBoundary;
