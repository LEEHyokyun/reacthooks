

export const useTitle = initialtitle => {
  const [title, setTitle] = useState(initialtitle)

  const upDator = () => {
    const htmltitle = document.querySelector("title")
    htmltitle.innerText = title
  }
  useEffect(upDator, [title])

  return setTitle
}

