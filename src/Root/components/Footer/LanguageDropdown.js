import React, { PureComponent } from "react";
import { ContainerLocalizationProvider } from "@ec-oem/ec.oem.oa3.mux.core/components";
import { connect } from "react-redux";
import { setLocalizationLanguage } from "@ec-oem/ec.oem.oa3.mux.core/actions";
import {
  localizationLanguagesSelector,
  localizationLanguageSelector
} from "../../selectors";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";

class LanguageDropdown extends PureComponent {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  onChange = Language => {
    this.props.languageChanged(Language.Code);
  };
  render() {
    const { languages, localizedLanguage, localStrings } = this.props;
    if(!languages || !localizedLanguage) return null;
    let [localizedLanguageValue] = languages.filter((lang)=> lang.Code == localizedLanguage);
    return (
      <React.Fragment>
        {languages && localizedLanguage ? (
          <Dropdown
            className={
              "language d-flex justify-content-center justify-content-lg-start m-auto m-lg-0"
            }
            isOpen={this.state.dropdownOpen}
            toggle={this.toggle}
          >
            <DropdownToggle
              id="changeLanguage"
              tag="button"
              className="btn btn-link ms-glyph ms-globe"
            >
             <span> {localizedLanguageValue.Language}</span>
            </DropdownToggle>

            <DropdownMenu aria-labelledby="LanguageMenu">
              {languages.map(language => (
                <DropdownItem key={language.Code} onClick={() => this.onChange(language)}>
                  {language.Language}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        ) : (
          <div />
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    localizedLanguage: localizationLanguageSelector(state),
    languages: localizationLanguagesSelector(state)
  };
};

const mapDispatchToProps = dispatch => ({
  languageChanged(value) {
    dispatch(setLocalizationLanguage(value));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerLocalizationProvider(LanguageDropdown));

