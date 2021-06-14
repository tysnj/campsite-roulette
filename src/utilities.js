
export const getCurrentStories = async (url) => {
  return await fetch(url).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(response.message)
    }
  })
}

export const getSpecificStories = async (url) => {
  return await fetch(url).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(response.message)
    }
  })
}

export const cleanHomeData = (data) => {
  return removeDuplicates(filterRelevant(sortStories(cleanStories(combineCurrentHits(data)))))
}

export const cleanSavedData = (data) => {
  return sortStories(cleanStories(combineSpecificHits(data)))
}

const removeDuplicates = (data) => {
  return data.filter((element, index, arr) => index === arr.findIndex(dup => dup.title === element.title))
}

const filterRelevant = (data) => {
  return data.filter(story => {
    if (story._highlightResult.title.matchedWords.length && story.url) {
      return story
    }
  })
}

const sortStories = (data) => {
  if (!data.length) {
    return
  } else {
    return data.sort((a, b) => {
      return b.objectID - a.objectID
    })
  }
}

const cleanStories = (data) => {
  let cleanData = [];
  if (!data.length) {
    return
  } else {
    data.forEach(story => {
      delete story.comment_text;
      delete story.author;
      delete story.points;
      delete story.story_text;
      delete story.comment_text;
      delete story.num_comments;
      delete story.story_id;
      delete story.story_title;
      delete story.story_url;
      delete story.parent_id;
      delete story._tags;
      delete story._highlightResult.author;
      delete story._highlightResult.url;
      delete story._highlightResult.title.matchLevel;
      delete story._highlightResult.title.value;
      delete story._highlightResult.title.fullyHighlighted;
      cleanData.push(story)
    })
  }
  return cleanData
}

const combineCurrentHits = (data) => {
  return data[0].hits.concat(
    data[1].hits,
    data[2].hits,
    data[3].hits,
    data[4].hits
  )
}

const combineSpecificHits = (data) => {
  return data.flatMap(arr => arr.hits)
}