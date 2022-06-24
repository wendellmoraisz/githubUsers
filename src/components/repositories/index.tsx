import RepositoryItem from "../repository-item";
import * as S from "./styles";

function Repositories() {
    return (
        <S.WrapperTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem
                name="repo 1" 
                linkToRepo="linkrepo"
                fullName="fullname"
                />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
            <RepositoryItem
                name="repo 2" 
                linkToRepo="linkrepo2"
                fullName="fullname2"
                />
            </S.WrapperTabPanel>
        </S.WrapperTabs>
    );
}

export default Repositories;