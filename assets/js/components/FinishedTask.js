import React, { Component } from 'react';

class FinishedTask extends Component {
    render() {
        return (
            <div className="card shadow m-1 border-dark text-muted">
                <div className="card-body p-0">
                    <div className="container">
                        <div className="row">
                            <button type="button" className="btn" onClick={() => this.props.onUndoPressed(this.props.taskId)}>
                                <i className="fas fa-undo" />
                            </button>
                            <span className="col p-2 pl-2 pr-2"><s>{this.props.taskLabel}</s></span>
                            <button type="button" className="btn" onClick={() => this.props.onDeletePressed(this.props.taskId)}>
                                <i className="fas fa-times-circle" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FinishedTask;
