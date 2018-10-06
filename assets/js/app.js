import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Task from './components/Task';
import FinishedTask from "./components/FinishedTask";

const $ = require('jquery');
require('../css/app.css');

class TaskList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                { id: Date.now(), name: 'Add more tasks' }
            ],
            finishedTasks: [],
            textFieldValue: ''
        };
    }

    handleTextField() {
        if (this.state.textFieldValue.length > 0) {
            this.state.tasks.push({
                id: Date.now(),
                name: this.state.textFieldValue
            });

            const state = Object.assign({}, this.state);
            state.textFieldValue = '';
            this.setState(state);
        }
    }

    finishTask(taskId) {
        const index = this.state.tasks.findIndex(task => task.id === taskId);
        const task = this.state.tasks.splice(index, 1);

        const state = Object.assign({}, this.state);
        state.finishedTasks.unshift(task[0]);
        this.setState(state);
    }

    deleteTask(taskId) {
        const index = this.state.tasks.findIndex(task => task.id === taskId);
        this.state.tasks.splice(index, 1);
        const newTasks = this.state.tasks.slice();

        const state = Object.assign({}, this.state);
        state.tasks = newTasks;
        this.setState(state);
    }

    undoFinishedTask(taskId) {
        const index = this.state.finishedTasks.findIndex(task => task.id === taskId);
        const task = this.state.finishedTasks.splice(index, 1);

        const state = Object.assign({}, this.state);
        state.tasks.push(task[0]);
        this.setState(state);
    }

    deleteFinishedTask(taskId) {
        const index = this.state.finishedTasks.findIndex(task => task.id === taskId);
        this.state.finishedTasks.splice(index, 1);
        const newFinishedTasks = this.state.finishedTasks.slice();

        const state = Object.assign({}, this.state);
        state.finishedTasks = newFinishedTasks;
        this.setState(state);
    }

    render() {

        const renderTasks = () => {
            if (this.state.tasks.length > 0) {
                return (
                    <div>
                        {this.state.tasks.map(task => (
                            <Task
                                key={task.id}
                                taskId={task.id}
                                taskLabel={task.name}
                                onFinishPressed={taskId => this.finishTask(taskId)}
                                onDeletePressed={taskId => this.deleteTask(taskId)}
                            />
                        ))}
                    </div>
                );
            } else {
                return (
                    <span className="text-black-50"><b>You finished all your tasks. Good Job!</b></span>
                );
            }
        };

        const renderTaskContainer = () => {
                return (
                    <div className="card shadow mb-3">
                        <div className="card-header">
                            <span className="h4"><i className="far fa-square" /> Tasks</span>
                        </div>
                        <div className="card-body">
                            {renderTasks()}
                        </div>
                    </div>
                );
        };

        const renderFinishedTasks = () => {
            if (this.state.finishedTasks.length > 0) {
                return (
                    <div>
                        {this.state.finishedTasks.map(task => (
                            <FinishedTask
                                key={task.id}
                                taskId={task.id}
                                taskLabel={task.name}
                                onUndoPressed={taskId => this.undoFinishedTask(taskId)}
                                onDeletePressed={taskId => this.deleteFinishedTask(taskId)}
                            />
                        ))}
                    </div>
                );
            } else {
                return (
                    <span className="text-white-50">There are no finished tasks</span>
                );
            }
        };

        const renderFinishedTaskContainer = () => {
            return (
                <div className="card text-light bg-secondary shadow mb-1">
                    <div className="card-header">
                        <span className="h5"><i className="fas fa-check-square" /> Finished tasks</span>
                    </div>
                    <div className="card-body">
                        {renderFinishedTasks()}
                    </div>
                </div>
            );
        };

        return (
            <div className="card bg-light shadow-lg">
                <div className="card-header text-light bg-dark">
                    <span className="h2"><i className="fas fa-check" /> Awesome Task List</span>
                </div>
                <div className="card-body">
                    <div className="input-group mb-3 shadow-sm">
                        <input
                            type="text"
                            className="form-control"
                            aria-describedby="task-button-addon"
                            value={this.state.textFieldValue}
                            onChange={e => {
                                const state = Object.assign({}, this.state);
                                state.textFieldValue = e.target.value;
                                this.setState(state)
                            }}
                            onKeyPress={e => {
                                if (e.key === 'Enter') {
                                    this.handleTextField();
                                }
                            }}
                            id="taskTextField"
                        />
                        <div className="input-group-append">
                            <button type="button" className="btn btn-info" id="task-button-addon" onClick={() => this.handleTextField()}>
                                <i className="fas fa-plus" /> New task
                            </button>
                        </div>
                    </div>
                    {renderTaskContainer()}
                    {renderFinishedTaskContainer()}
                </div>
                <div className="card-footer bg-dark text-center text-white-50">
                    Developed in 2018 by Martin Enderleit
                </div>
            </div>
        );
    }
}

$(document).ready(function() {
    ReactDOM.render(<TaskList />,
        document.getElementById('awesome-task-app')
    );
});
