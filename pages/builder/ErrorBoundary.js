import React from "react";
import dynamic from "next/dynamic";
const Title = dynamic(() => import("components/text").then((mod) => mod.Title));

class ErrorBoundary extends React.Component {
   constructor(props) {
      super(props);
      this.state = { hasError: false };
   }

   static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      console.log("caught error");
      return { hasError: true };
   }

   componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log("caught error");
   }

   render() {
      if (this.state.hasError) {
         // You can render any custom fallback UI
         return <Title level={3}>Invalid slide data</Title>;
      }

      return this.props.children;
   }
}

export default ErrorBoundary;
