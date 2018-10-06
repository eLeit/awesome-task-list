import React, { Component } from 'react';

class Task extends Component {
    render() {
        return (
            <div className="card shadow m-1 border-dark">
                <div className="card-body p-0">
                    <div className="container">
                        <div className="row">
                            <button type="button" className="btn" onClick={() => this.props.onFinishPressed(this.props.taskId)}>
                                <i className="fas fa-check" />
                            </button>
                            <span className="col p-2 pl-2 pr-2">{this.props.taskLabel}</span>
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

export default Task;
