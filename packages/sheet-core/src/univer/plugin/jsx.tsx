import React from 'react'

export default (html: string) => {
  return () => <span style={{"display": 'inline-flex'}} dangerouslySetInnerHTML={{__html: html}}></span> 
}