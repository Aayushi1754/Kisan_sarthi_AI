import React from "react";

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {

        if (this.state.hasError) {

            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-100">
                    <div className="text-center">

                        <h1 className="text-4xl font-bold text-red-600">
                            Oops!
                        </h1>

                        <p className="mt-4 text-lg">
                            Something went wrong.
                        </p>

                        <button
                            className="mt-6 bg-blue-600 text-white px-5 py-2 rounded"
                            onClick={() => window.location.reload()}
                        >
                            Reload Page
                        </button>

                    </div>
                </div>
            );

        }

        return this.props.children;
    }
}

export default ErrorBoundary;