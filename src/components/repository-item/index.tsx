import * as S from "./styles";


interface Props {
    name: string
    linkToRepo: string
    fullName: string
}

function RepositoryItem({name, linkToRepo, fullName}: Props) {

    return (
        <S.Wrapper>
            <S.WrapperTitle>{name}</S.WrapperTitle>
            <S.WrapperFullName>full name repo:</S.WrapperFullName>
            <S.WrapperLink href={`https://github.com/${linkToRepo}`}
             target="blank"
             >
                {fullName}
                </S.WrapperLink>
        </S.Wrapper>
    );
}

export default RepositoryItem;