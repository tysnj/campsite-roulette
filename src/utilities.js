
export const getStories = async (url) => {
  return await fetch(url).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(response.message)
    }
  })
}

export const getSaved = async (url) => {
  return await fetch(url).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(response.message)
    }
  })
}

export const cleanData = (data) => {
  return filterRelevant(sortStories(cleanStories(combineHits(data))))
}

const filterRelevant = (data) => {
  return data.filter(story => {
    if (story._highlightResult.title.matchedWords.length) {
      return story
    }
  })
}

const sortStories = (data) => {
  return data.sort((a, b) => {
    return b.objectID - a.objectID
  })
}

const cleanStories = (data) => {
  let cleanData = [];
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
  return cleanData
}

const combineHits = (data) => {
  return data[0].hits.concat(
    data[1].hits,
    data[2].hits,
    data[3].hits,
    data[4].hits
  )
}