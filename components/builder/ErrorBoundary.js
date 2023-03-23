import React from "react";
import dynamic from "next/dynamic";
const Title = dynamic(() => import("components/text").then((mod) => mod.Title));

class ErrorBoundary extends React.PureComponent {
   constructor(props) {
      super(props);
      this.state = { hasError: false };
   }

   static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
   }

   componentDidUpdate(prevProps) {
      if (JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data)) {
         this.setState({ hasError: false });
      }
   }

   render() {
      if (this.state.hasError) {
         // You can render any custom fallback UI
         return (
            <Title level={3}>
               Invalid slide data, please fill necessary fields
            </Title>
         );
      }

      return this.props.children;
   }
}

export default ErrorBoundary;
