
interface Props {
    name: string
    linkToRepo: string
    fullName: string
}

function RepositoryItem({name, linkToRepo, fullName}: Props) {

    return (
        <div>
            <h2>{name}</h2>
            <h4>full name repo:</h4>
            <a href={linkToRepo}
             target="_blank"
             >
                {fullName}
                </a>
        </div>
    );
}

export default RepositoryItem;