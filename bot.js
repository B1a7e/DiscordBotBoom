# Just A Bot by B1a7e

import discord
from discord.ext import commands
from discord.ext.commands import Bot
import asyncio

bot = commands.Bot(command_prefix='#')

print (discord.__version__)

@bot.event
async def on_ready():
    print ("Ready when you are xd")
    print ("I am running on " + bot.user.name)
    print ("With the ID: " + bot.user.id)

@bot.command(pass_context=True)
async def ping(ctx):
    await bot.say(":ping_pong: ping!! xSSS")
    print ("user has pinged")

@bot.command(pass_context=True)
async def info(ctx, user: discord.Member):
    embed = discord.Embed(title="{}'s info".format(user.name), description="Here's what I could find.", color=0x00ff00)
    embed.add_field(name="Name", value=user.name, inline=True)
    embed.add_field(name="ID", value=user.id, inline=True)
    embed.add_field(name="Status", value=user.status, inline=True)
    embed.add_field(name="Highest role", value=user.top_role)
    embed.add_field(name="Joined", value=user.joined_at)
    embed.set_thumbnail(url=user.avatar_url)
    await bot.say(embed=embed)

@bot.command(pass_context=True)
async def serverinfo(ctx):
    embed = discord.Embed(name="{}'s info".format(ctx.message.server.name), description="Here's what I could find.", color=0x00ff00)
    embed.set_author(name="Will Ryan of DAGames")
    embed.add_field(name="Name", value=ctx.message.server.name, inline=True)
    embed.add_field(name="ID", value=ctx.message.server.id, inline=True)
    embed.add_field(name="Roles", value=len(ctx.message.server.roles), inline=True)
    embed.add_field(name="Members", value=len(ctx.message.server.members))
    embed.set_thumbnail(url=ctx.message.server.icon_url)
    await bot.say(embed=embed)

@bot.command(pass_context=True)
@commands.has_role("Helper")
async def kick(ctx, user: discord.Member):
    await bot.say("@everyone {} has been kicked :boot: L shouldnt have broken any of our rules!".format(user.name))
    await bot.kick(user)
    await client.send_message(message.channel, "%s" % (" ".join(args[1:])))
    await client.send_message(message.channel, "You do not have permission")
        
@bot.command(pass_context=True)
async def embed(ctx):
    embed = discord.Embed(title="boom", description="boom", color=0x00ff00)
    embed.set_footer(text="I just embeded it")
    embed.set_author(name="B1a7e")
    embed.add_field(name=":hammer:", value="no it isn't", inline=True)
    await bot.say(embed=embed)
    
bot.run("NDI1MDIwMDUyMjI4ODAwNTIz.DZBYZA.xoWB9tE4Q8ZO5qlWAAf19-XHng4")
