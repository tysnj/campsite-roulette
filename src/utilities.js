
export const getStories = async (url) => {
  return await fetch(url).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(response.message)
    }
  })
}

export const sortStories = (data) => {
  return data[0].hits.concat(
    data[1].hits,
    data[2].hits,
    data[3].hits,
    data[4].hits
  )
  .sort((a, b) => {
    return b.objectID - a.objectID
  })
}