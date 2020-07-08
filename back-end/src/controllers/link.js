const express = require('express')

const { Link } = require('../models')
const router = express.Router()

router.get('/', async (req, res)=> {
    const {accountId} = req
    const links = await Link.findAll({where: {accountId}})


    return res.jsonOK(links)
})

router.get('/:id', async(req, res) => {
    const {accountId} = req

    const { id } = req.params

    const link = await Link.findOne({where: {id, accountId}})
    
    if(!link) return res.jsonNotFound(null)

    return res.jsonOK(link)
})

router.post('/', async (req, res)=> {
    
    const {label, url, isSocial} = req.body
    
    const {accountId} = req
    const image = 'hhtps://google.image.png'

    console.log('----------------',Link)
    const link = await Link.create({label, url, isSocial, image, accountId})



    return res.jsonOK(link)
})

router.put('/:id', async (req, res) => {
    const {accountId} = req
    
    const{ id }= req.params
    
    const {body} = req
    
    const fields = ['label', 'url', 'isSocial']


    const link = await Link.findOne({where: {id, accountId}})
    
    if(!link) return res.jsonNotFound(null)


    fields.map(fieldName => {
        const newValue = body[fieldName]
        if(newValue != undefined) link[fieldName]= newValue
    })

    await link.save()

    res.jsonOK(link)
    
})

router.delete('/:id', async (req, res)=> {

    const {id} = req.params
    const {accountId} = req

    const link = await Link.findOne({where: {id, accountId}})

    if(!link) res.jsonNotFound()

    await link.destroy()

    return res.jsonOK()
})

module.exports = router;