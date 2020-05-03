import React, { Component } from 'react';

export default class DynamicImport extends Component {
    state = { LoadingComponent: () => (<div>Loading...</div>), loading: false };

    componentDidMount() {
        if (!this.state.loading) {
            const { placeholder, import: path, ...otherProps } = this.props;
            this.otherProps = otherProps;
            this.setState({ loading: true });

            if (typeof path === 'function') {
                path()
                .then((loaded) => this.setState({
                    LoadingComponent: loaded.default ? loaded.default : loaded,
                    loading: false
                }));
            }
        }
    }

    render() {
        const { LoadingComponent } = this.state;
        const props = this.otherProps;

        return LoadingComponent ? <LoadingComponent {...props} /> : null;
    }
}
