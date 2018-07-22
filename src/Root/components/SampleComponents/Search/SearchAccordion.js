import React, { PureComponent } from 'react';
import { Card, Collapse } from "reactstrap";

class SearchAccordion extends PureComponent {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { isOpen: true };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleChange = (event, Key,Title, ValueDescription) => {
        const data = {
            Key: Key,
            Title:Title,
            Value: event.target.value,
            ValueDescription,
            isSelected: event.target.checked
        }
        this.props.updateSearchFilters(data);
    }

    render() {
        const { Title, Key, Values } = this.props;

        return (
            <div className="accordion search-filter-accordion">

                <Card >
                    <div className="card-header" id={`searchFilter-${Title}`}>
                        <h4 className="mb-0">
                            <button className="btn btn-link ms-glyph ms-chevron-down" onClick={this.toggle} aria-expanded={this.state.isOpen} aria-controls={`searchFilterCollapse-${Title}`}>
                                <span tabIndex="-1">{Title}</span>
                            </button>
                        </h4>
                    </div>
                    <Collapse aria-labelledby={`SearchFilterOptions-${Title}`} isOpen={this.state.isOpen}>
                        <div className="card-body">

                            {Values && Values.map((value) => {
                                return (
                                    <div key={value.key} className="custom-control custom-checkbox" onClick={() => this.handleChange({ target: { value: value.Key, checked: !value.isSelected } }, Key,Title, value.Value)}>
                                        <input type="checkbox" className="custom-control-input" name={value.Key} checked={value.isSelected} id={value.key} value={value.Key} onChange={(event) => this.handleChange(event, Key,Title, value.Value)} />
                                        <label className="custom-control-label" htmlFor={value.key}>{value.Value}</label>
                                    </div>
                                );
                            })}
                        </div>
                    </Collapse>
                </Card>
            </div>
        )
    }
}


export default SearchAccordion;


